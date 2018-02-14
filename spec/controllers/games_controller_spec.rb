require 'rails_helper'

RSpec.describe GamesController, type: :controller do
    let(:user) { create(:user) }
    let(:court) { create(:court) }
    let(:game) { create(:game, court: court) }
    let(:user_creator) { UserGame.create(user: user, game: game, creator: true) }

    before do
        sign_in user
    end

    describe "GET #index" do
        it "returns HTTP success" do
            get :index
            expect(response).to have_http_status(:success)
        end

        it "assigns all games to @games" do
            get :index
            expect(assigns(:games).count).to eq(Game.all.count)
        end
    end

    describe "GET #show" do
        it "returns HTTP success" do
            get :show, params: { id: game.id }
            expect(response).to have_http_status(:success)
        end

        it "renders the #show view" do
            get :show, params: { id: game.id }
            expect(response).to render_template :show
        end

        it "assigns game to @game" do
            get :show, params: { id: game.id }
            expect(assigns(:game)).to eq(game)
        end

        it "assigns court to @court" do
            get :show, params: { id: game.id }
            expect(assigns(:court)).to eq(court)
        end

        it "assigns game.users to @players" do
            get :show, params: { id: game.id }
            expect(assigns(:players)).to eq(game.users)
        end
    end
end
