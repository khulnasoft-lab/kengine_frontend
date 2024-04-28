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
 * @interface ModelStopScanRequest
 */
export interface ModelStopScanRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelStopScanRequest
     */
    scan_ids: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelStopScanRequest
     */
    scan_type: ModelStopScanRequestScanTypeEnum;
}


/**
 * @export
 */
export const ModelStopScanRequestScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type ModelStopScanRequestScanTypeEnum = typeof ModelStopScanRequestScanTypeEnum[keyof typeof ModelStopScanRequestScanTypeEnum];


/**
 * Check if a given object implements the ModelStopScanRequest interface.
 */
export function instanceOfModelStopScanRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "scan_ids" in value;
    isInstance = isInstance && "scan_type" in value;

    return isInstance;
}

export function ModelStopScanRequestFromJSON(json: any): ModelStopScanRequest {
    return ModelStopScanRequestFromJSONTyped(json, false);
}

export function ModelStopScanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelStopScanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scan_ids': json['scan_ids'],
        'scan_type': json['scan_type'],
    };
}

export function ModelStopScanRequestToJSON(value?: ModelStopScanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scan_ids': value.scan_ids,
        'scan_type': value.scan_type,
    };
}

