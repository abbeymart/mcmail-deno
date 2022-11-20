/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-14
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: mc-mail: types
 */

import { Readable } from "nodemailer/lib/xoauth2";
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Buffer } from "https://deno.land/std@0.160.0/io/buffer.ts";

export type ValueType =
    | Record<string, unknown>
    | Array<Record<string, unknown>>
    | string
    | number
    | Array<string>
    | Array<number>
    | boolean
    | Array<boolean>;

export interface ObjectType {
    [key: string]: ValueType;
}

export interface EmailConfigType {
    username: string;
    password: string;
    port: number;
    serverUrl: string;
    msgFrom: string;
}

export interface EmailPropsType {
    [key: string]: string | number | Date;
}

export type EmailSubjectFunc = (props: EmailPropsType) => string;

export type EmailFunc = (props: EmailPropsType) => string | Buffer | Readable | AttachmentLike | undefined;

export interface TemplateDataType {
    [key: string]: string | number | Date;
}

export interface EmailRequestType {
    toEmail: Array<string>;
    requestName?: string;
    successMessage?: string;
    templateData: TemplateDataType;
    fromEmail?: string;
}

export interface EmailTemplateType {
    subject: EmailSubjectFunc;
    text: EmailFunc;
    html?: EmailFunc;
}

export interface MessageObject {
    [key: string]: string;
}
