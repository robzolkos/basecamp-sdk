/**
 * HillCharts service for the Basecamp API.
 *
 * @generated from OpenAPI spec - do not edit directly
 */

import { BaseService } from "../../services/base.js";
import type { components } from "../schema.js";

// =============================================================================
// Types
// =============================================================================


/**
 * Request parameters for updateHillChartSettings.
 */
export interface UpdateHillChartSettingsHillChartRequest {
  /** Tracked */
  tracked?: number[];
  /** Untracked */
  untracked?: number[];
}


// =============================================================================
// Service
// =============================================================================

/**
 * Service for HillCharts operations.
 */
export class HillChartsService extends BaseService {

  /**
   * Get the hill chart for a todoset
   * @param todosetId - The todoset ID
   * @returns The hill_chart
   *
   * @example
   * ```ts
   * const result = await client.hillCharts.hillChart(123);
   * ```
   */
  async hillChart(todosetId: number): Promise<components["schemas"]["GetHillChartResponseContent"]> {
    const response = await this.request(
      {
        service: "HillCharts",
        operation: "GetHillChart",
        resourceType: "hill_chart",
        isMutation: false,
        resourceId: todosetId,
      },
      () =>
        this.client.GET("/todosets/{todosetId}/hill.json", {
          params: {
            path: { todosetId },
          },
        })
    );
    return response;
  }

  /**
   * Track or untrack todolists on a hill chart
   * @param todosetId - The todoset ID
   * @param req - Hill_chart_setting update parameters
   * @returns The hill_chart_setting
   * @throws {BasecampError} If the resource is not found or fields are invalid
   *
   * @example
   * ```ts
   * const result = await client.hillCharts.updateHillChartSettings(123, { });
   * ```
   */
  async updateHillChartSettings(todosetId: number, req: UpdateHillChartSettingsHillChartRequest): Promise<components["schemas"]["UpdateHillChartSettingsResponseContent"]> {
    const response = await this.request(
      {
        service: "HillCharts",
        operation: "UpdateHillChartSettings",
        resourceType: "hill_chart_setting",
        isMutation: true,
        resourceId: todosetId,
      },
      () =>
        this.client.PUT("/todosets/{todosetId}/hills/settings.json", {
          params: {
            path: { todosetId },
          },
          body: {
            tracked: req.tracked,
            untracked: req.untracked,
          },
        })
    );
    return response;
  }
}