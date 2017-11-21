require 'rails_helper'

RSpec.describe "EventSpaces", type: :request do
  describe "GET /event_spaces" do
    it "works! (now write some real specs)" do
      get event_spaces_path
      expect(response).to have_http_status(200)
    end
  end
end
