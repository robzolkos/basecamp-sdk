package com.basecamp.sdk.generated.services

import com.basecamp.sdk.*
import com.basecamp.sdk.generated.models.*
import com.basecamp.sdk.services.BaseService
import kotlinx.serialization.json.JsonElement

/**
 * Service for MyNotifications operations.
 *
 * @generated from OpenAPI spec — do not edit directly
 */
class MyNotificationsService(client: AccountClient) : BaseService(client) {

    /**
     * Get the current user's notification inbox (the "Hey!" menu).
     * @param options Optional query parameters and pagination control
     */
    suspend fun myNotifications(options: GetMyNotificationsOptions? = null): JsonElement {
        val info = OperationInfo(
            service = "MyNotifications",
            operation = "GetMyNotifications",
            resourceType = "my_notification",
            isMutation = false,
            projectId = null,
            resourceId = null,
        )
        val qs = buildQueryString(
            "page" to options?.page,
        )
        return request(info, {
            httpGet("/my/readings.json" + qs, operationName = info.operation)
        }) { body ->
            json.decodeFromString<JsonElement>(body)
        }
    }

    /**
     * Mark specified items as read
     * @param body Request body
     */
    suspend fun markAsRead(body: MarkAsReadBody): Unit {
        val info = OperationInfo(
            service = "MyNotifications",
            operation = "MarkAsRead",
            resourceType = "resource",
            isMutation = true,
            projectId = null,
            resourceId = null,
        )
        request(info, {
            httpPut("/my/unreads.json", json.encodeToString(kotlinx.serialization.json.buildJsonObject {
                put("readables", kotlinx.serialization.json.JsonArray(body.readables.map { kotlinx.serialization.json.JsonPrimitive(it) }))
            }), operationName = info.operation)
        }) { Unit }
    }
}
