"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Find and Play
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorResponseFromJSON(json) {
    return ErrorResponseFromJSONTyped(json, false);
}
exports.ErrorResponseFromJSON = ErrorResponseFromJSON;
function ErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': json['message'],
    };
}
exports.ErrorResponseFromJSONTyped = ErrorResponseFromJSONTyped;
function ErrorResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}
exports.ErrorResponseToJSON = ErrorResponseToJSON;
