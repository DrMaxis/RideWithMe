<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">
        <tr>
            <th>@lang('labels.frontend.user.profile.avatar')</th>
            <td><img style="max-width: 650px" src="{{ $logged_in_user->cars->first()->picture }}" class="user-profile-image" /></td>
        </tr>
 
    </table>
</div>
