var numeral = require('../../numeral');

exports.byteUnits = {
    bytesBinaryDefault: function (test) {
        var power = function(exp) { return Math.pow(1024, exp); },
            tests = [
                [0, 'B'],
                [0.5, 'B'],
                [100, 'B'],
                [1023.9, 'B'],
                [1024, 'KB'],
                [power(1)*2, 'KB'],
                [power(2)*5, 'MB'],
                [power(3)*7.343, 'GB'],
                [power(4)*3.1536544, 'TB'],
                [power(5)*2.953454534534, 'PB'],
                [power(6), 'EB'],
                [power(7), 'ZB'],
                [power(8), 'YB'],
                [power(9), 'YB'], // note: it's 1024 YB
                [power(10), 'YB'] // 1024^2 YB
            ].reduce(function (tests, test) {
              tests.push(test);
              tests.push([-test[0], test[1]]);
              return tests;
            }, []),
            i;

        test.expect(tests.length);

        for (i = 0; i < tests.length; ++i) {
            test.strictEqual(numeral(tests[i][0]).byteUnits(false, false), tests[i][1], tests[i][0] + ' ' + tests[i][1]);
        }

        test.done();
    },

    bytesDecimal: function (test) {
        var power = function(exp) { return Math.pow(1000, exp); },
            tests = [
                [0, 'B'],
                [0.5, 'B'],
                [100, 'B'],
                [1000, 'kB'],
                [1024, 'kB'],
                [power(1)*2, 'kB'],
                [power(2)*5, 'MB'],
                [power(3)*7.343, 'GB'],
                [power(4)*3.1536544, 'TB'],
                [power(5)*2.953454534534, 'PB'],
                [power(6), 'EB'],
                [power(7), 'ZB'],
                [power(8), 'YB'],
                [power(9), 'YB'], // note: it's 1024 YB
                [power(10), 'YB'] // 1024^2 YB
            ].reduce(function (tests, test) {
              tests.push(test);
              tests.push([-test[0], test[1]]);
              return tests;
            }, []),
            i;

        test.expect(tests.length);

        for (i = 0; i < tests.length; ++i) {
            test.strictEqual(numeral(tests[i][0]).byteUnits(true, true), tests[i][1], tests[i][0] + ' ' + tests[i][1]);
        }

        test.done();
    },

    bytesBinaryStandard: function (test) {
        var power = function(exp) { return Math.pow(1024, exp); },
            tests = [
                [0, 'B'],
                [0.5, 'B'],
                [100, 'B'],
                [1023.9, 'B'],
                [1024, 'KiB'],
                [power(1)*2, 'KiB'],
                [power(2)*5, 'MiB'],
                [power(3)*7.343, 'GiB'],
                [power(4)*3.1536544, 'TiB'],
                [power(5)*2.953454534534, 'PiB'],
                [power(6), 'EiB'],
                [power(7), 'ZiB'],
                [power(8), 'YiB'],
                [power(9), 'YiB'], // note: it's 1024 YB
                [power(10), 'YiB'] // 1024^2 YB
            ].reduce(function (tests, test) {
              tests.push(test);
              tests.push([-test[0], test[1]]);
              return tests;
            }, []),
            i;

        test.expect(tests.length);

        for (i = 0; i < tests.length; ++i) {
            test.strictEqual(numeral(tests[i][0]).byteUnits(false, true), tests[i][1], tests[i][0] + ' ' + tests[i][1]);
        }

        test.done();
    },

    bitsDecimal: function (test) {
        var power = function(exp) { return Math.pow(1000, exp); },
            tests = [
                [0, 'bit'],
                [0.5, 'bit'],
                [100, 'bit'],
                [1000, 'kbit'],
                [1024, 'kbit'],
                [power(1)*2, 'kbit'],
                [power(2)*5, 'Mbit'],
                [power(3)*7.343, 'Gbit'],
                [power(4)*3.1536544, 'Tbit'],
                [power(5)*2.953454534534, 'Pbit'],
                [power(6), 'Ebit'],
                [power(7), 'Zbit'],
                [power(8), 'Ybit'],
                [power(9), 'Ybit'], // note: it's 1024 Ybit
                [power(10), 'Ybit'] // 1024^2 Ybit
            ].reduce(function (tests, test) {
              tests.push(test);
              tests.push([-test[0], test[1]]);
              return tests;
            }, []),
            i;

        test.expect(tests.length);

        for (i = 0; i < tests.length; ++i) {
            test.strictEqual(numeral(tests[i][0]).byteUnits(true, true, true), tests[i][1], tests[i][0] + ' ' + tests[i][1]);
        }

        test.done();
    },

    bitsBinary: function (test) {
        var power = function(exp) { return Math.pow(1024, exp); },
            tests = [
                [0, 'bit'],
                [0.5, 'bit'],
                [100, 'bit'],
                [1023.9, 'bit'],
                [1024, 'Kibit'],
                [power(1)*2, 'Kibit'],
                [power(2)*5, 'Mibit'],
                [power(3)*7.343, 'Gibit'],
                [power(4)*3.1536544, 'Tibit'],
                [power(5)*2.953454534534, 'Pibit'],
                [power(6), 'Eibit'],
                [power(7), 'Zibit'],
                [power(8), 'Yibit'],
                [power(9), 'Yibit'], // note: it's 1024 Ybit
                [power(10), 'Yibit'] // 1024^2 Ybit
            ].reduce(function (tests, test) {
              tests.push(test);
              tests.push([-test[0], test[1]]);
              return tests;
            }, []),
            i;

        test.expect(tests.length);

        for (i = 0; i < tests.length; ++i) {
            test.strictEqual(numeral(tests[i][0]).byteUnits(false, true, true), tests[i][1], tests[i][0] + ' ' + tests[i][1]);
        }

        test.done();
    }
};
