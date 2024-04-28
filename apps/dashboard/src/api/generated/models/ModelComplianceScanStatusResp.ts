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
import type { ModelComplianceScanInfo } from './ModelComplianceScanInfo';
import {
    ModelComplianceScanInfoFromJSON,
    ModelComplianceScanInfoFromJSONTyped,
    ModelComplianceScanInfoToJSON,
} from './ModelComplianceScanInfo';

/**
 * 
 * @export
 * @interface ModelComplianceScanStatusResp
 */
export interface ModelComplianceScanStatusResp {
    /**
     * 
     * @type {Array<ModelComplianceScanInfo>}
     * @memberof ModelComplianceScanStatusResp
     */
    statuses: Array<ModelComplianceScanInfo> | null;
}

/**
 * Check if a given object implements the ModelComplianceScanStatusResp interface.
 */
export function instanceOfModelComplianceScanStatusResp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statuses" in value;

    return isInstance;
}

export function ModelComplianceScanStatusRespFromJSON(json: any): ModelComplianceScanStatusResp {
    return ModelComplianceScanStatusRespFromJSONTyped(json, false);
}

export function ModelComplianceScanStatusRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelComplianceScanStatusResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statuses': (json['statuses'] === null ? null : (json['statuses'] as Array<any>).map(ModelComplianceScanInfoFromJSON)),
    };
}

export function ModelComplianceScanStatusRespToJSON(value?: ModelComplianceScanStatusResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statuses': (value.statuses === null ? null : (value.statuses as Array<any>).map(ModelComplianceScanInfoToJSON)),
    };
}

