package com.basecamp.sdk.generated.services

import com.basecamp.sdk.*
import com.basecamp.sdk.generated.models.*
import com.basecamp.sdk.services.BaseService
import kotlinx.serialization.json.JsonElement

/**
 * Service for MyAssignments operations.
 *
 * @generated from OpenAPI spec — do not edit directly
 */
class MyAssignmentsService(client: AccountClient) : BaseService(client) {

    /**
     * Get the current user's active assignments grouped into priorities and non_priorities.
     */
    suspend fun myAssignments(): JsonElement {
        val info = OperationInfo(
            service = "MyAssignments",
            operation = "GetMyAssignments",
            resourceType = "my_assignment",
            isMutation = false,
            projectId = null,
            resourceId = null,
        )
        return request(info, {
            httpGet("/my/assignments.json", operationName = info.operation)
        }) { body ->
            json.decodeFromString<JsonElement>(body)
        }
    }

    /**
     * Get the current user's completed assignments.
     */
    suspend fun myCompletedAssignments(): JsonElement {
        val info = OperationInfo(
            service = "MyAssignments",
            operation = "GetMyCompletedAssignments",
            resourceType = "my_completed_assignment",
            isMutation = false,
            projectId = null,
            resourceId = null,
        )
        return request(info, {
            httpGet("/my/assignments/completed.json", operationName = info.operation)
        }) { body ->
            json.decodeFromString<JsonElement>(body)
        }
    }

    /**
     * Get the current user's assignments filtered by due date scope.
     * @param options Optional query parameters and pagination control
     */
    suspend fun myDueAssignments(options: GetMyDueAssignmentsOptions? = null): JsonElement {
        val info = OperationInfo(
            service = "MyAssignments",
            operation = "GetMyDueAssignments",
            resourceType = "my_due_assignment",
            isMutation = false,
            projectId = null,
            resourceId = null,
        )
        val qs = buildQueryString(
            "scope" to options?.scope,
        )
        return request(info, {
            httpGet("/my/assignments/due.json" + qs, operationName = info.operation)
        }) { body ->
            json.decodeFromString<JsonElement>(body)
        }
    }
}
