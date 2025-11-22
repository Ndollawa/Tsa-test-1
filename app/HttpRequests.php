<?php

namespace App;

trait HttpRequests
{
    protected function success($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $code)->header('Content-Type', 'application/json');
    }

    protected function error($data, $message, $code)
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}
