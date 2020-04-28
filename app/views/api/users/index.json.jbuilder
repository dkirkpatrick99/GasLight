@users.each do |user|
  json.set! user.id do
        json.extract! user, :id, :username, :email, :photo_url
  end
end