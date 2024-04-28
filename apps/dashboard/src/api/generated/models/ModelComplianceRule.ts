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
 * @interface ModelComplianceRule
 */
export interface ModelComplianceRule {
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelComplianceRule
     */
    masked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    test_category: string;
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    test_desc: string;
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    test_number: string;
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    test_rationale: string;
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceRule
     */
    test_severity: string;
    /**
     * 
     * @type {number}
     * @memberof ModelComplianceRule
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelComplianceRule interface.
 */
export function instanceOfModelComplianceRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "masked" in value;
    isInstance = isInstance && "test_category" in value;
    isInstance = isInstance && "test_desc" in value;
    isInstance = isInstance && "test_number" in value;
    isInstance = isInstance && "test_rationale" in value;
    isInstance = isInstance && "test_severity" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelComplianceRuleFromJSON(json: any): ModelComplianceRule {
    return ModelComplianceRuleFromJSONTyped(json, false);
}

export function ModelComplianceRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelComplianceRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'masked': json['masked'],
        'test_category': json['test_category'],
        'test_desc': json['test_desc'],
        'test_number': json['test_number'],
        'test_rationale': json['test_rationale'],
        'test_severity': json['test_severity'],
        'updated_at': json['updated_at'],
    };
}

export function ModelComplianceRuleToJSON(value?: ModelComplianceRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'masked': value.masked,
        'test_category': value.test_category,
        'test_desc': value.test_desc,
        'test_number': value.test_number,
        'test_rationale': value.test_rationale,
        'test_severity': value.test_severity,
        'updated_at': value.updated_at,
    };
}

