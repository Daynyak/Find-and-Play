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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Playground
 */
export interface Playground {
    /**
     * 
     * @type {number}
     * @memberof Playground
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Playground
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Playground
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Playground
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Playground
     */
    sport?: string;
}

export function PlaygroundFromJSON(json: any): Playground {
    return PlaygroundFromJSONTyped(json, false);
}

export function PlaygroundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Playground {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'sport': !exists(json, 'sport') ? undefined : json['sport'],
    };
}

export function PlaygroundToJSON(value?: Playground | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'image': value.image,
        'name': value.name,
        'address': value.address,
        'sport': value.sport,
    };
}


