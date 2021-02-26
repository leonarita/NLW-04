defmodule RocketpayWeb.AccountsControllerTest do
  use RocketpayWeb.ConnCase, async: true

  alias Rocketpay.{Account,User}

  describe "deposit/2" do

    setup %{conn: conn} do

      params = %{
        name: "Leo",
        password: "123456",
        nickname: "Leozin",
        email: "leo@gmails.com",
        age: 27
      }

      {:ok, %User{account: %Account{id: account_id}}} = Rocketpay.create_user(params)

      conn = put_req_header(conn, "authorization", "Basic #{Base.encode64("admin:123456")}")

      {:ok, conn: conn, account_id: account_id}
    end

    test "when all params are valid, make the deposit", %{conn: conn, account_id: account_id} do
      params = %{"value" => "50.00"}

      response = conn
      |> post(Routes.accounts_path(conn, :deposit, account_id, params))
      |> json_response(:ok)

      assert %{"account" =>
              %{"balance" => "50.00", "id" => _id},
              "message" => "Ballance changed successfully"
            } = response
    end

    test "when there are invalid params, return an error", %{conn: conn, account_id: account_id} do
      params = %{"value" => "banana"}

      response = conn
      |> post(Routes.accounts_path(conn, :deposit, account_id, params))
      |> json_response(400)

      assert %{"message" => "Invalid deposit value!"} = response
    end

  end


end
