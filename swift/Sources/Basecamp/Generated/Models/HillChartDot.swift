// @generated from OpenAPI spec — do not edit directly
import Foundation

public struct HillChartDot: Codable, Sendable {
    public let color: String
    public let id: Int
    public let label: String
    public let position: Int32
    public var appUrl: String?
    public var url: String?

    public init(
        color: String,
        id: Int,
        label: String,
        position: Int32,
        appUrl: String? = nil,
        url: String? = nil
    ) {
        self.color = color
        self.id = id
        self.label = label
        self.position = position
        self.appUrl = appUrl
        self.url = url
    }
}
