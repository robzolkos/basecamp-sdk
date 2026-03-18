// @generated from OpenAPI spec — do not edit directly
import Foundation

public struct UpdateHillChartSettingsRequest: Codable, Sendable {
    public var tracked: [Int]?
    public var untracked: [Int]?

    public init(tracked: [Int]? = nil, untracked: [Int]? = nil) {
        self.tracked = tracked
        self.untracked = untracked
    }
}
