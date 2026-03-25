// @generated from OpenAPI spec — do not edit directly
import Foundation

public final class AccountService: BaseService, @unchecked Sendable {
    public func account() async throws -> Account {
        return try await request(
            OperationInfo(service: "Account", operation: "GetAccount", resourceType: "account", isMutation: false),
            method: "GET",
            path: "/account.json",
            retryConfig: Metadata.retryConfig(for: "GetAccount")
        )
    }

    public func removeAccountLogo() async throws {
        try await requestVoid(
            OperationInfo(service: "Account", operation: "RemoveAccountLogo", resourceType: "resource", isMutation: true),
            method: "DELETE",
            path: "/account/logo.json",
            retryConfig: Metadata.retryConfig(for: "RemoveAccountLogo")
        )
    }

    public func updateAccountLogo() async throws {
        try await requestVoid(
            OperationInfo(service: "Account", operation: "UpdateAccountLogo", resourceType: "account_logo", isMutation: true),
            method: "PUT",
            path: "/account/logo.json",
            retryConfig: Metadata.retryConfig(for: "UpdateAccountLogo")
        )
    }

    public func updateAccountName(req: UpdateAccountNameRequest) async throws -> Account {
        return try await request(
            OperationInfo(service: "Account", operation: "UpdateAccountName", resourceType: "account_name", isMutation: true),
            method: "PUT",
            path: "/account/name.json",
            body: req,
            retryConfig: Metadata.retryConfig(for: "UpdateAccountName")
        )
    }
}
