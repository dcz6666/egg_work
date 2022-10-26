// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminAuth = require('../../../app/middleware/admin_auth');
import ExportAuth = require('../../../app/middleware/auth');
import ExportCompress = require('../../../app/middleware/compress');
import ExportForbidip = require('../../../app/middleware/forbidip');
import ExportJsonp = require('../../../app/middleware/jsonp');
import ExportPrintdate = require('../../../app/middleware/printdate');

declare module 'egg' {
  interface IMiddleware {
    adminAuth: typeof ExportAdminAuth;
    auth: typeof ExportAuth;
    compress: typeof ExportCompress;
    forbidip: typeof ExportForbidip;
    jsonp: typeof ExportJsonp;
    printdate: typeof ExportPrintdate;
  }
}
