package com.basecamp.sdk.generated.services

import com.basecamp.sdk.*
import com.basecamp.sdk.generated.models.*
import com.basecamp.sdk.services.BaseService
import kotlinx.serialization.json.JsonElement

/**
 * Service for Miscellaneous operations.
 *
 * @generated from OpenAPI spec — do not edit directly
 */
class MiscellaneousService(client: AccountClient) : BaseService(client) {

    /**
     * Update the current authenticated user's profile
     * @param body Request body
     */
    suspend fun updateMyProfile(body: UpdateMyProfileBody): Unit {
        val info = OperationInfo(
            service = "Miscellaneous",
            operation = "UpdateMyProfile",
            resourceType = "my_profile",
            isMutation = true,
            projectId = null,
            resourceId = null,
        )
        request(info, {
            httpPut("/my/profile.json", json.encodeToString(kotlinx.serialization.json.buildJsonObject {
                body.name?.let { put("name", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.emailAddress?.let { put("email_address", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.title?.let { put("title", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.bio?.let { put("bio", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.location?.let { put("location", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.timeZoneName?.let { put("time_zone_name", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.firstWeekDay?.let { put("first_week_day", kotlinx.serialization.json.JsonPrimitive(it)) }
                body.timeFormat?.let { put("time_format", kotlinx.serialization.json.JsonPrimitive(it)) }
            }), operationName = info.operation)
        }) { Unit }
    }
}
