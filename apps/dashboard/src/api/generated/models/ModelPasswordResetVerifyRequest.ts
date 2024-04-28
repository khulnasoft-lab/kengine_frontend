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
 * @interface ModelPasswordResetVerifyRequest
 */
export interface ModelPasswordResetVerifyRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelPasswordResetVerifyRequest
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPasswordResetVerifyRequest
     */
    namespace: string;
    /**
     * 
     * @type {string}
     * @memberof ModelPasswordResetVerifyRequest
     */
    password: string;
}

/**
 * Check if a given object implements the ModelPasswordResetVerifyRequest interface.
 */
export function instanceOfModelPasswordResetVerifyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function ModelPasswordResetVerifyRequestFromJSON(json: any): ModelPasswordResetVerifyRequest {
    return ModelPasswordResetVerifyRequestFromJSONTyped(json, false);
}

export function ModelPasswordResetVerifyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelPasswordResetVerifyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'namespace': json['namespace'],
        'password': json['password'],
    };
}

export function ModelPasswordResetVerifyRequestToJSON(value?: ModelPasswordResetVerifyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'namespace': value.namespace,
        'password': value.password,
    };
}

