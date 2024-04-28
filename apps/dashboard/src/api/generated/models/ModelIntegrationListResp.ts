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
import type { ModelIntegrationFilters } from './ModelIntegrationFilters';
import {
    ModelIntegrationFiltersFromJSON,
    ModelIntegrationFiltersFromJSONTyped,
    ModelIntegrationFiltersToJSON,
} from './ModelIntegrationFilters';

/**
 * 
 * @export
 * @interface ModelIntegrationListResp
 */
export interface ModelIntegrationListResp {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelIntegrationListResp
     */
    config?: { [key: string]: any; } | null;
    /**
     * 
     * @type {ModelIntegrationFilters}
     * @memberof ModelIntegrationListResp
     */
    filters?: ModelIntegrationFilters;
    /**
     * 
     * @type {number}
     * @memberof ModelIntegrationListResp
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelIntegrationListResp
     */
    integration_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelIntegrationListResp
     */
    last_error_msg?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelIntegrationListResp
     */
    notification_type?: string;
}

/**
 * Check if a given object implements the ModelIntegrationListResp interface.
 */
export function instanceOfModelIntegrationListResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelIntegrationListRespFromJSON(json: any): ModelIntegrationListResp {
    return ModelIntegrationListRespFromJSONTyped(json, false);
}

export function ModelIntegrationListRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelIntegrationListResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : json['config'],
        'filters': !exists(json, 'filters') ? undefined : ModelIntegrationFiltersFromJSON(json['filters']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'integration_type': !exists(json, 'integration_type') ? undefined : json['integration_type'],
        'last_error_msg': !exists(json, 'last_error_msg') ? undefined : json['last_error_msg'],
        'notification_type': !exists(json, 'notification_type') ? undefined : json['notification_type'],
    };
}

export function ModelIntegrationListRespToJSON(value?: ModelIntegrationListResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
        'filters': ModelIntegrationFiltersToJSON(value.filters),
        'id': value.id,
        'integration_type': value.integration_type,
        'last_error_msg': value.last_error_msg,
        'notification_type': value.notification_type,
    };
}

