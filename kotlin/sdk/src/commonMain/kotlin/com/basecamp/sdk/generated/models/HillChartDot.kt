package com.basecamp.sdk.generated.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

/**
 * HillChartDot entity from the Basecamp API.
 *
 * @generated from OpenAPI spec — do not edit directly
 */
@Serializable
data class HillChartDot(
    val id: Long,
    val label: String,
    val color: String,
    val position: Int,
    val url: String? = null,
    @SerialName("app_url") val appUrl: String? = null
)
