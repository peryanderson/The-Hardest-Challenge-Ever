# require "debugger"
before '/games*' do
  redirect '/' unless authenticated?
end


get '/games' do
  # @games = Event.all
  # @user_events = []
  # @games.each do |event|
  #   if event.user == current_user
  #     @user_events << event
  #   end
  # end
  erb :"/games/index"
end


# get '/games/new' do
#   @event = Event.new
#   erb :"/games/new"
# end

# post '/games' do
#   @event = Event.new(params[:event])
#   @event.user = current_user
#   if @event.save
#     current_user.created_events << @event
#     redirect '/games'
#   else
#     @message = "That event cannot be created"
#     erb :"/games/new"
#   end
# end

# get '/games/:game_id' do
#   @event = Event.find_by(id: params[:game_id])
#   erb :"games/show"
# end

# get '/games/:game_id/edit' do
#   @event = Event.find_by(id: params[:game_id])
#   erb :"games/edit"
# end

# put '/games/:game_id' do
#   @event = Event.find_by(id: params[:game_id])
#   if @event.update_attributes(params[:event])
#     redirect '/games'
#   else
#     @message = "That event cannot be created"
#   end
# end

# delete '/games/:game_id' do
#   @event = Event.find_by(id: params[:game_id])
#   @event.delete
#   redirect '/games'
# end
