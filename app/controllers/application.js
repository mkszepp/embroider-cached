import Controller from '@ember/controller';
import { cached } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
    @cached
    get title() {
        return 'Cached test';
    }
}
