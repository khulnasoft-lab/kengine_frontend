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
import type { UtilsReportFilters } from './UtilsReportFilters';
import {
    UtilsReportFiltersFromJSON,
    UtilsReportFiltersFromJSONTyped,
    UtilsReportFiltersToJSON,
} from './UtilsReportFilters';
import type { UtilsReportOptions } from './UtilsReportOptions';
import {
    UtilsReportOptionsFromJSON,
    UtilsReportOptionsFromJSONTyped,
    UtilsReportOptionsToJSON,
} from './UtilsReportOptions';

/**
 * 
 * @export
 * @interface ModelGenerateReportReq
 */
export interface ModelGenerateReportReq {
    /**
     * 
     * @type {UtilsReportFilters}
     * @memberof ModelGenerateReportReq
     */
    filters?: UtilsReportFilters;
    /**
     * 
     * @type {number}
     * @memberof ModelGenerateReportReq
     */
    from_timestamp?: number;
    /**
     * 
     * @type {UtilsReportOptions}
     * @memberof ModelGenerateReportReq
     */
    options?: UtilsReportOptions;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerateReportReq
     */
    report_type: ModelGenerateReportReqReportTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ModelGenerateReportReq
     */
    to_timestamp?: number;
}


/**
 * @export
 */
export const ModelGenerateReportReqReportTypeEnum = {
    Pdf: 'pdf',
    Xlsx: 'xlsx',
    Sbom: 'sbom'
} as const;
export type ModelGenerateReportReqReportTypeEnum = typeof ModelGenerateReportReqReportTypeEnum[keyof typeof ModelGenerateReportReqReportTypeEnum];


/**
 * Check if a given object implements the ModelGenerateReportReq interface.
 */
export function instanceOfModelGenerateReportReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "report_type" in value;

    return isInstance;
}

export function ModelGenerateReportReqFromJSON(json: any): ModelGenerateReportReq {
    return ModelGenerateReportReqFromJSONTyped(json, false);
}

export function ModelGenerateReportReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerateReportReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filters': !exists(json, 'filters') ? undefined : UtilsReportFiltersFromJSON(json['filters']),
        'from_timestamp': !exists(json, 'from_timestamp') ? undefined : json['from_timestamp'],
        'options': !exists(json, 'options') ? undefined : UtilsReportOptionsFromJSON(json['options']),
        'report_type': json['report_type'],
        'to_timestamp': !exists(json, 'to_timestamp') ? undefined : json['to_timestamp'],
    };
}

export function ModelGenerateReportReqToJSON(value?: ModelGenerateReportReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filters': UtilsReportFiltersToJSON(value.filters),
        'from_timestamp': value.from_timestamp,
        'options': UtilsReportOptionsToJSON(value.options),
        'report_type': value.report_type,
        'to_timestamp': value.to_timestamp,
    };
}

