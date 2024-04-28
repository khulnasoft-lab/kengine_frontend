/* tslint:disable */
/* eslint-disable */
/**
 * Khulnasoft Kengine
 * Khulnasoft Runtime API provides programmatic control over Khulnasoft microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: community@khulnasoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelRegistryAddReq
 */
export interface ModelRegistryAddReq {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelRegistryAddReq
     */
    extras?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryAddReq
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelRegistryAddReq
     */
    non_secret?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryAddReq
     */
    registry_type: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelRegistryAddReq
     */
    secret?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the ModelRegistryAddReq interface.
 */
export function instanceOfModelRegistryAddReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "registry_type" in value;

    return isInstance;
}

export function ModelRegistryAddReqFromJSON(json: any): ModelRegistryAddReq {
    return ModelRegistryAddReqFromJSONTyped(json, false);
}

export function ModelRegistryAddReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegistryAddReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': json['name'],
        'non_secret': !exists(json, 'non_secret') ? undefined : json['non_secret'],
        'registry_type': json['registry_type'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
    };
}

export function ModelRegistryAddReqToJSON(value?: ModelRegistryAddReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extras': value.extras,
        'name': value.name,
        'non_secret': value.non_secret,
        'registry_type': value.registry_type,
        'secret': value.secret,
    };
}

