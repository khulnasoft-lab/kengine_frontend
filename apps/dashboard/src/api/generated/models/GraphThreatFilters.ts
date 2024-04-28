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
import type { GraphCloudProviderFilter } from './GraphCloudProviderFilter';
import {
    GraphCloudProviderFilterFromJSON,
    GraphCloudProviderFilterFromJSONTyped,
    GraphCloudProviderFilterToJSON,
} from './GraphCloudProviderFilter';

/**
 * 
 * @export
 * @interface GraphThreatFilters
 */
export interface GraphThreatFilters {
    /**
     * 
     * @type {GraphCloudProviderFilter}
     * @memberof GraphThreatFilters
     */
    aws_filter: GraphCloudProviderFilter;
    /**
     * 
     * @type {GraphCloudProviderFilter}
     * @memberof GraphThreatFilters
     */
    azure_filter: GraphCloudProviderFilter;
    /**
     * 
     * @type {boolean}
     * @memberof GraphThreatFilters
     */
    cloud_resource_only: boolean;
    /**
     * 
     * @type {GraphCloudProviderFilter}
     * @memberof GraphThreatFilters
     */
    gcp_filter: GraphCloudProviderFilter;
    /**
     * 
     * @type {string}
     * @memberof GraphThreatFilters
     */
    type: GraphThreatFiltersTypeEnum;
}


/**
 * @export
 */
export const GraphThreatFiltersTypeEnum = {
    All: 'all',
    Vulnerability: 'vulnerability',
    Secret: 'secret',
    Malware: 'malware',
    Compliance: 'compliance',
    CloudCompliance: 'cloud_compliance'
} as const;
export type GraphThreatFiltersTypeEnum = typeof GraphThreatFiltersTypeEnum[keyof typeof GraphThreatFiltersTypeEnum];


/**
 * Check if a given object implements the GraphThreatFilters interface.
 */
export function instanceOfGraphThreatFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "aws_filter" in value;
    isInstance = isInstance && "azure_filter" in value;
    isInstance = isInstance && "cloud_resource_only" in value;
    isInstance = isInstance && "gcp_filter" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function GraphThreatFiltersFromJSON(json: any): GraphThreatFilters {
    return GraphThreatFiltersFromJSONTyped(json, false);
}

export function GraphThreatFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphThreatFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aws_filter': GraphCloudProviderFilterFromJSON(json['aws_filter']),
        'azure_filter': GraphCloudProviderFilterFromJSON(json['azure_filter']),
        'cloud_resource_only': json['cloud_resource_only'],
        'gcp_filter': GraphCloudProviderFilterFromJSON(json['gcp_filter']),
        'type': json['type'],
    };
}

export function GraphThreatFiltersToJSON(value?: GraphThreatFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aws_filter': GraphCloudProviderFilterToJSON(value.aws_filter),
        'azure_filter': GraphCloudProviderFilterToJSON(value.azure_filter),
        'cloud_resource_only': value.cloud_resource_only,
        'gcp_filter': GraphCloudProviderFilterToJSON(value.gcp_filter),
        'type': value.type,
    };
}

