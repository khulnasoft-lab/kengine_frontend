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
 * @interface ModelGenerateLicenseResponse
 */
export interface ModelGenerateLicenseResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelGenerateLicenseResponse
     */
    generate_license_link?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerateLicenseResponse
     */
    message: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelGenerateLicenseResponse
     */
    success: boolean;
}

/**
 * Check if a given object implements the ModelGenerateLicenseResponse interface.
 */
export function instanceOfModelGenerateLicenseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "success" in value;

    return isInstance;
}

export function ModelGenerateLicenseResponseFromJSON(json: any): ModelGenerateLicenseResponse {
    return ModelGenerateLicenseResponseFromJSONTyped(json, false);
}

export function ModelGenerateLicenseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerateLicenseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'generate_license_link': !exists(json, 'generate_license_link') ? undefined : json['generate_license_link'],
        'message': json['message'],
        'success': json['success'],
    };
}

export function ModelGenerateLicenseResponseToJSON(value?: ModelGenerateLicenseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'generate_license_link': value.generate_license_link,
        'message': value.message,
        'success': value.success,
    };
}

