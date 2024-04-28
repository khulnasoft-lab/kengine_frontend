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
import type { ModelCloudCompliance } from './ModelCloudCompliance';
import {
    ModelCloudComplianceFromJSON,
    ModelCloudComplianceFromJSONTyped,
    ModelCloudComplianceToJSON,
} from './ModelCloudCompliance';

/**
 * 
 * @export
 * @interface ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance
 */
export interface ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance {
    /**
     * 
     * @type {Array<ModelCloudCompliance>}
     * @memberof ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance
     */
    _new: Array<ModelCloudCompliance> | null;
}

/**
 * Check if a given object implements the ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance interface.
 */
export function instanceOfModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_new" in value;

    return isInstance;
}

export function ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudComplianceFromJSON(json: any): ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance {
    return ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudComplianceFromJSONTyped(json, false);
}

export function ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudComplianceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_new': (json['new'] === null ? null : (json['new'] as Array<any>).map(ModelCloudComplianceFromJSON)),
    };
}

export function ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudComplianceToJSON(value?: ModelScanCompareResGithubComKhulnasoftKengineKhulnasoftServerModelCloudCompliance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'new': (value._new === null ? null : (value._new as Array<any>).map(ModelCloudComplianceToJSON)),
    };
}

