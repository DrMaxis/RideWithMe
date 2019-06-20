<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">
        <tr>
            <th>@lang('labels.frontend.user.profile.avatar')</th>
            <td><img style="max-width: 650px" src="{{ $logged_in_user->cars->first()->picture ?? 'https://www.gravatar.com/avatar/6a903cd8c26a4cb1a7781f54651d63e6.jpg?s=80&d=mm&r=g' }}" class="user-profile-image" /></td>
        </tr>
 
    </table>
</div>
