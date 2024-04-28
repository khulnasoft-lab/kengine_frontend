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
 * @interface ModelRegistryCredentials
 */
export interface ModelRegistryCredentials {
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryCredentials
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryCredentials
     */
    registry_url?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryCredentials
     */
    username?: string;
}

/**
 * Check if a given object implements the ModelRegistryCredentials interface.
 */
export function instanceOfModelRegistryCredentials(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelRegistryCredentialsFromJSON(json: any): ModelRegistryCredentials {
    return ModelRegistryCredentialsFromJSONTyped(json, false);
}

export function ModelRegistryCredentialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegistryCredentials {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'registry_url': !exists(json, 'registry_url') ? undefined : json['registry_url'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ModelRegistryCredentialsToJSON(value?: ModelRegistryCredentials | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'registry_url': value.registry_url,
        'username': value.username,
    };
}

