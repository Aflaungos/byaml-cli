#!/usr/bin/env node

/**
* @copyright 2018 - Max Bebök
* @author Max Bebök
* @license GNU-GPLv3 - see the "LICENSE" file in the root directory
*/

const program = require("commander");
const fs      = require("fs");
const BYAML   = require("byaml-lib");
const Binary_File_Loader = require("binary-file").Loader;

const EXIT_SUCCESS = 0;
const EXIT_ERROR   = 1;

function handleError(err)
{
    process.stderr.write(err + "");
    process.exit(EXIT_ERROR);
}

program.version('0.1.0')
    .description("CLI for creating and parsing BYAML files.\n" + 
               "  © Max Bebök - 2018 - as part of 'Ice-Spear Tools'");

program.command('decode <byamlFile> [fileOut]')
    .description('decodes a BYAML file back into the original file')
    .action(function (byamlFile, fileOut) 
    {
        fs.readFile(byamlFile, (err, yaz0Buffer) => 
        {
            if(err)return handleError(err);

            const fileLoader = new Binary_File_Loader();
            const parser = new BYAML.Parser();

            const data = parser.parse(fileLoader.buffer(byamlFile));
            const dataBuffer = JSON.stringify(data, null, 4);

            if(fileOut == null)
            {
                process.stdout.write(dataBuffer);
            }else{
                fs.writeFile(fileOut, dataBuffer, (err) => {
                    if(err)return handleError(err);
                    process.exit(EXIT_SUCCESS);
                });
            }
        });
    });

program.command('encode <fileIn> [byamlOut]')
    .description("encodes a file into an BYAML file")
    .action(function (fileIn, yazOut) 
    {
        console.log("[WIP]");
    });

program.parse(process.argv);