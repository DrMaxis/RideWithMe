<?php

namespace App\Models\Auth\Cars\Traits\Method;

/**
 * Trait CarMethod.
 */
trait CarMethod
{







    /**
     * @param bool $size
     *
     * @throws \Illuminate\Container\EntryNotFoundException
     * @return bool|\Illuminate\Contracts\Routing\UrlGenerator|mixed|string
     */
    public function getPicture()
    {

        return url('img/frontend/user/' . $this->image);
    }
}
