import generateAuthHeader from './auth';

import curl from './targets/curl';
import javascript from './targets/javascript';
import python from './targets/python';
import node from './targets/node';
import ruby from './targets/ruby';
import php from './targets/php';
import golang from './targets/golang';

class CodeGenerator {
  constructor(request, url, cookiejars) {
    this.request = request;
    this.url = url;
    this.cookiejars = cookiejars;
    this.code = null;

    this.request.cookies = this.appendCookies();

    if (this.request.authentication && this.request.authentication.type) {
      this.request.authHeader = generateAuthHeader(this.request.authentication);
    }
  }

  generate(language) {
    switch (language) {
      case 'curl':
        this.code = curl;
        break;
      case 'javascript':
        this.code = javascript;
        break;
      case 'python':
        this.code = python;
        break;
      case 'node':
        this.code = node;
        break;
      case 'ruby':
        this.code = ruby;
        break;
      case 'php':
        this.code = php;
        break;
      case 'golang':
        this.code = golang;
        break;
      default:
        return 'Not implemented yet...';
    }

    return this.code(this.url, this.request);
  }

  appendCookies() {
    const cookies = [];

    this.cookiejars.forEach(jar => {
      if (!jar.cookies || !jar.cookies.length) {
        return;
      }

      jar.cookies.forEach(cookie => {
        if (this.url.includes(cookie.domain) && (cookie.path === '/' || this.url.includes(cookie.path))) {
          cookies.push({
            key: cookie.key,
            value: cookie.value
          });
        }
      });
    });

    return cookies;
  }
};

export default (request, url, language, cookiejars) => new CodeGenerator(request, url, cookiejars).generate(language);
