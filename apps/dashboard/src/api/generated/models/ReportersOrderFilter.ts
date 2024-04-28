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
import type { ReportersOrderSpec } from './ReportersOrderSpec';
import {
    ReportersOrderSpecFromJSON,
    ReportersOrderSpecFromJSONTyped,
    ReportersOrderSpecToJSON,
} from './ReportersOrderSpec';

/**
 * 
 * @export
 * @interface ReportersOrderFilter
 */
export interface ReportersOrderFilter {
    /**
     * 
     * @type {Array<ReportersOrderSpec>}
     * @memberof ReportersOrderFilter
     */
    order_fields: Array<ReportersOrderSpec> | null;
}

/**
 * Check if a given object implements the ReportersOrderFilter interface.
 */
export function instanceOfReportersOrderFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "order_fields" in value;

    return isInstance;
}

export function ReportersOrderFilterFromJSON(json: any): ReportersOrderFilter {
    return ReportersOrderFilterFromJSONTyped(json, false);
}

export function ReportersOrderFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportersOrderFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order_fields': (json['order_fields'] === null ? null : (json['order_fields'] as Array<any>).map(ReportersOrderSpecFromJSON)),
    };
}

export function ReportersOrderFilterToJSON(value?: ReportersOrderFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order_fields': (value.order_fields === null ? null : (value.order_fields as Array<any>).map(ReportersOrderSpecToJSON)),
    };
}

