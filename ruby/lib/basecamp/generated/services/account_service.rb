# frozen_string_literal: true

module Basecamp
  module Services
    # Service for Account operations
    #
    # @generated from OpenAPI spec
    class AccountService < BaseService

      # Get the account for the current access token
      # @return [Hash] response data
      def get_account()
        with_operation(service: "account", operation: "get_account", is_mutation: false) do
          http_get("/account.json").json
        end
      end

      # Upload or replace the account logo via multipart form upload.
      # @param logo [String] The logo image file sent as multipart/form-data.
      #   SDK implementations should send this as a multipart upload with field name "logo".
      # @return [void]
      def update_account_logo(logo:)
        with_operation(service: "account", operation: "update_account_logo", is_mutation: true) do
          http_put("/account/logo.json", body: compact_params(logo: logo))
          nil
        end
      end

      # Remove the account logo. Only administrators and account owners can use this endpoint.
      # @return [void]
      def remove_account_logo()
        with_operation(service: "account", operation: "remove_account_logo", is_mutation: true) do
          http_delete("/account/logo.json")
          nil
        end
      end

      # Rename the current account. Only account owners can use this endpoint.
      # @param name [String] name
      # @return [Hash] response data
      def update_account_name(name:)
        with_operation(service: "account", operation: "update_account_name", is_mutation: true) do
          http_put("/account/name.json", body: compact_params(name: name)).json
        end
      end
    end
  end
end
