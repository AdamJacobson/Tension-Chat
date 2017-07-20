require 'test_helper'

class Api::ChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_channels_index_url
    assert_response :success
  end

  test "should get show" do
    get api_channels_show_url
    assert_response :success
  end

end
