// @generated from OpenAPI spec — do not edit directly
import Foundation

public final class MiscellaneousService: BaseService, @unchecked Sendable {
    public func updateMyProfile(req: UpdateMyProfileRequest) async throws {
        try await requestVoid(
            OperationInfo(service: "Miscellaneous", operation: "UpdateMyProfile", resourceType: "my_profile", isMutation: true),
            method: "PUT",
            path: "/my/profile.json",
            body: req,
            retryConfig: Metadata.retryConfig(for: "UpdateMyProfile")
        )
    }
}
