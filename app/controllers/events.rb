require "debugger"
before '/events*' do
  redirect '/' unless authenticated?
end


get '/events' do
  @events = Event.all
  @user_events = []
  @events.each do |event|
    if event.user == current_user
      @user_events << event
    end
  end
  erb :"/events/index"
end

get '/events/new' do
  @event = Event.new
  erb :"/events/new"
end

post '/events' do
  @event = Event.new(params[:event])
  @event.user = current_user
  if @event.save
    current_user.created_events << @event
    redirect '/events'
  else
    @message = "That event cannot be created"
    erb :"/events/new"
  end
end

get '/events/:event_id' do
  @event = Event.find_by(id: params[:event_id])
  erb :"events/show"
end

get '/events/:event_id/edit' do
  @event = Event.find_by(id: params[:event_id])
  erb :"events/edit"
end

put '/events/:event_id' do
  @event = Event.find_by(id: params[:event_id])
  if @event.update_attributes(params[:event])
    redirect '/events'
  else
    @message = "That event cannot be created"
  end
end

delete '/events/:event_id' do
  @event = Event.find_by(id: params[:event_id])
  @event.delete
  redirect '/events'
end
