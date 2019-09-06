const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');
const ieDriver = require('iedriver');
const edgeDriver = require('edgedriver');

module.exports = {
  src_folders: ['tests'],
  output_folder: 'output/reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',
  live_output: false,
  disable_colors: false,
  parallel_process_delay: 10,
  "test_workers": {
    "enabled": false,
    "workers": "auto"
  },
  selenium: {
    start_process: true,
    start_session: false,
    server_path: seleniumServer.path,
    check_process_delay: 5000,
    log_path: 'output/logs',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chromeDriver.path,
      "webdriver.gecko.driver": geckoDriver.path,
      "webdriver.ie.driver": ieDriver.path,
      "webdriver.edge.driver": edgeDriver.path
    }
  },
  test_settings: {
    skip_testcases_on_fail: false,
    end_session_on_fail: false,
    default: {
      "screenshots": {
        "enabled": true,
        "on_failure": true,
        "on_error": false,
        "path": "output/screenshots"
      },
      desiredCapabilities: {
        browserName: 'chrome',
      }
    },
    headlessChrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          w3c: false,
          args: ['headless', 'disable-gpu']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          w3c: false,
          args: ['disable-gpu']
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
      }
    },
    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true,
      }
    }
  }
};