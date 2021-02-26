defmodule RocketpayWeb.UsersViewTest do

  import Phoenix.View
  use RocketpayWeb.ConnCase, async: true
  alias Rocketpay.{Account, User}

  test "renders create.json" do

    params = %{
      name: "Leo",
      password: "123456",
      nickname: "Leozin",
      email: "leo@gmails.com",
      age: 27
    }

    {:ok, %User{id: user_id, account: %Account{id: account_id}} = user} = Rocketpay.create_user(params)

    response = render(RocketpayWeb.UsersView, "create.json", user: user)

    expected_response = %{
      message: "User created",
      user: %{
        account: %{
          balance: Decimal.new("0.00"),
          id: account_id
        },
        id: user_id,
        name: "Leo",
        nickname: "Leozin"
      }
    }

    assert expected_response == response

  end

end
