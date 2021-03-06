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
 * @interface PlaygroundCertain
 */
export interface PlaygroundCertain {
    /**
     * 
     * @type {number}
     * @memberof PlaygroundCertain
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PlaygroundCertain
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaygroundCertain
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaygroundCertain
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaygroundCertain
     */
    sport?: string;
    /**
     * 
     * @type {number}
     * @memberof PlaygroundCertain
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PlaygroundCertain
     */
    capacity?: number;
    /**
     * 
     * @type {string}
     * @memberof PlaygroundCertain
     */
    surface?: string;
}

export function PlaygroundCertainFromJSON(json: any): PlaygroundCertain {
    return PlaygroundCertainFromJSONTyped(json, false);
}

export function PlaygroundCertainFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaygroundCertain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'sport': !exists(json, 'sport') ? undefined : json['sport'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'surface': !exists(json, 'surface') ? undefined : json['surface'],
    };
}

export function PlaygroundCertainToJSON(value?: PlaygroundCertain | null): any {
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
        'size': value.size,
        'capacity': value.capacity,
        'surface': value.surface,
    };
}


