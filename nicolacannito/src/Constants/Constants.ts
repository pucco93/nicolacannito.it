import { Post, Form } from '../models/index';

export const UndefinedPost: Post = {
    id: 0,
    title: '',
    text: '',
    date: new Date(),
    url: '',
    urlImg: ''
};

export const UndefinedForm: Form = {
    name: '',
    surname: '',
    mail: '',
    title: '',
    description: ''
};

/**
 * EmailJS IDs
 */
export const ServiceID: string = "YOUR_SERVICE_ID";
export const TemplateID: string = "YOUR_TEMPLATE_ID";

/**
 * Mail status
 */
export const SuccessStatus: string = "SUCCESS";
export const FailureStatus: string = "FAILURE";