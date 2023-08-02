json.tweets do
  json.array! @tweets do |tweet|
    json.id tweet.id
    json.email tweet.user.email
    json.username tweet.user.username
    json.message tweet.message
    json.created_at tweet.created_at
    json.image url_for(tweet.image) if tweet.image.attached?
  end
end
