
import React, { Component, ReactElement } from "react";

export type FileTypes = '.csv' | '.zip' | '.json' | 'image/*';

declare module "react-file-reader" {
    interface ReactFileReaderProps {
        fileTypes: FileTypes | FileTypes[];
        multipleFiles: boolean;
        base64: boolean;
        disabled: boolean;
        handleFiles: (event: React.SyntheticEvent<any>, fileList: ReadonlyArray<FileList>) => void;
        children: any;
    }

    export default class ReactFileReader extends React.Component<ReactFileReaderProps> {
    }
}