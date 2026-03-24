/**
 * MyNotifications service for the Basecamp API.
 *
 * @generated from OpenAPI spec - do not edit directly
 */

import { BaseService } from "../../services/base.js";
import type { components } from "../schema.js";
import { Errors } from "../../errors.js";

// =============================================================================
// Types
// =============================================================================


/**
 * Options for myNotifications.
 */
export interface MyNotificationsMyNotificationOptions {
  /** Page number for paginating through read items. Defaults to 1. */
  page?: number;
}

/**
 * Request parameters for markAsRead.
 */
export interface MarkAsReadMyNotificationRequest {
  /** Array of readable_sgid values identifying the items to mark as read */
  readables: string[];
}


// =============================================================================
// Service
// =============================================================================

/**
 * Service for MyNotifications operations.
 */
export class MyNotificationsService extends BaseService {

  /**
   * Get the current user's notification inbox (the "Hey!" menu).
   * @param options - Optional query parameters
   * @returns The my_notification
   *
   * @example
   * ```ts
   * const result = await client.myNotifications.myNotifications();
   * ```
   */
  async myNotifications(options?: MyNotificationsMyNotificationOptions): Promise<components["schemas"]["GetMyNotificationsResponseContent"]> {
    const response = await this.request(
      {
        service: "MyNotifications",
        operation: "GetMyNotifications",
        resourceType: "my_notification",
        isMutation: false,
      },
      () =>
        this.client.GET("/my/readings.json", {
          params: {
            query: { page: options?.page },
          },
        })
    );
    return response;
  }

  /**
   * Mark specified items as read
   * @param req - Resource request parameters
   * @returns void
   * @throws {BasecampError} If the request fails
   *
   * @example
   * ```ts
   * await client.myNotifications.markAsRead({ readables: [1234] });
   * ```
   */
  async markAsRead(req: MarkAsReadMyNotificationRequest): Promise<void> {
    if (!req.readables) {
      throw Errors.validation("Readables is required");
    }
    await this.request(
      {
        service: "MyNotifications",
        operation: "MarkAsRead",
        resourceType: "resource",
        isMutation: true,
      },
      () =>
        this.client.PUT("/my/unreads.json", {
          body: {
            readables: req.readables,
          },
        })
    );
  }
}