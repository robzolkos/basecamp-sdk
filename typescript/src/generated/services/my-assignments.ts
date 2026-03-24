/**
 * MyAssignments service for the Basecamp API.
 *
 * @generated from OpenAPI spec - do not edit directly
 */

import { BaseService } from "../../services/base.js";
import type { components } from "../schema.js";

// =============================================================================
// Types
// =============================================================================


/**
 * Options for myDueAssignments.
 */
export interface MyDueAssignmentsMyAssignmentOptions {
  /** Filter by due date range: overdue, due_today, due_tomorrow,
due_later_this_week, due_next_week, due_later */
  scope?: string;
}


// =============================================================================
// Service
// =============================================================================

/**
 * Service for MyAssignments operations.
 */
export class MyAssignmentsService extends BaseService {

  /**
   * Get the current user's active assignments grouped into priorities and non_priorities.
   * @returns The my_assignment
   *
   * @example
   * ```ts
   * const result = await client.myAssignments.myAssignments();
   * ```
   */
  async myAssignments(): Promise<components["schemas"]["GetMyAssignmentsResponseContent"]> {
    const response = await this.request(
      {
        service: "MyAssignments",
        operation: "GetMyAssignments",
        resourceType: "my_assignment",
        isMutation: false,
      },
      () =>
        this.client.GET("/my/assignments.json", {
        })
    );
    return response;
  }

  /**
   * Get the current user's completed assignments.
   * @returns Array of results
   *
   * @example
   * ```ts
   * const result = await client.myAssignments.myCompletedAssignments();
   * ```
   */
  async myCompletedAssignments(): Promise<components["schemas"]["GetMyCompletedAssignmentsResponseContent"]> {
    const response = await this.request(
      {
        service: "MyAssignments",
        operation: "GetMyCompletedAssignments",
        resourceType: "my_completed_assignment",
        isMutation: false,
      },
      () =>
        this.client.GET("/my/assignments/completed.json", {
        })
    );
    return response ?? [];
  }

  /**
   * Get the current user's assignments filtered by due date scope.
   * @param options - Optional query parameters
   * @returns Array of results
   *
   * @example
   * ```ts
   * const result = await client.myAssignments.myDueAssignments();
   * ```
   */
  async myDueAssignments(options?: MyDueAssignmentsMyAssignmentOptions): Promise<components["schemas"]["GetMyDueAssignmentsResponseContent"]> {
    const response = await this.request(
      {
        service: "MyAssignments",
        operation: "GetMyDueAssignments",
        resourceType: "my_due_assignment",
        isMutation: false,
      },
      () =>
        this.client.GET("/my/assignments/due.json", {
          params: {
            query: { scope: options?.scope },
          },
        })
    );
    return response ?? [];
  }
}