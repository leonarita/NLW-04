defmodule RocketpayWeb.FallbackController do
  use RocketpayWeb, :controller

  def call(conn, {:error, result}) do
    IO.puts("Tratando erros")

    conn
    |> put_status(:bad_request)
    |> put_view(RocketpayWeb.ErrorView)
    |> render("400.json", result: result)
  end

end
