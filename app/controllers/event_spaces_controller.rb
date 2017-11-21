class EventSpacesController < ApplicationController
  before_action :set_event_space, only: [:show, :edit, :update, :destroy]

  # GET /event_spaces
  # GET /event_spaces.json
  def index
    @event_spaces = EventSpace.all
  end

  # GET /event_spaces/1
  # GET /event_spaces/1.json
  def show
  end

  # GET /event_spaces/new
  def new
    @event_space = EventSpace.new
  end

  # GET /event_spaces/1/edit
  def edit
  end

  # POST /event_spaces
  # POST /event_spaces.json
  def create
    @event_space = EventSpace.new(event_space_params)

    respond_to do |format|
      if @event_space.save
        format.html { redirect_to @event_space, notice: 'Event space was successfully created.' }
        format.json { render :show, status: :created, location: @event_space }
      else
        format.html { render :new }
        format.json { render json: @event_space.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_spaces/1
  # PATCH/PUT /event_spaces/1.json
  def update
    respond_to do |format|
      if @event_space.update(event_space_params)
        format.html { redirect_to @event_space, notice: 'Event space was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_space }
      else
        format.html { render :edit }
        format.json { render json: @event_space.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_spaces/1
  # DELETE /event_spaces/1.json
  def destroy
    @event_space.destroy
    respond_to do |format|
      format.html { redirect_to event_spaces_url, notice: 'Event space was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_space
      @event_space = EventSpace.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_space_params
      params.require(:event_space).permit(:location, :rate, :description, :amenity_id, :user_id)
    end
end
