json.extract! event_space, :id, :location, :rate, :description, :amenity_id, :user_id, :created_at, :updated_at
json.url event_space_url(event_space, format: :json)
